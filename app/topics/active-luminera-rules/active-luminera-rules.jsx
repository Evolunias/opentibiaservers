import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-rules');
}

export default function ActiveLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-rules" />;
}
