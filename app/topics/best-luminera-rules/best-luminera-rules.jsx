import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-rules');
}

export default function BestLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-rules" />;
}
