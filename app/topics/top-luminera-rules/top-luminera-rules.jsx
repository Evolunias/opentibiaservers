import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-rules');
}

export default function TopLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-rules" />;
}
