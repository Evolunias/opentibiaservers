import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-rules');
}

export default function TopRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-rules" />;
}
