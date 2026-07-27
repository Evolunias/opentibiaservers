import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-rules');
}

export default function CurrentLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-rules" />;
}
