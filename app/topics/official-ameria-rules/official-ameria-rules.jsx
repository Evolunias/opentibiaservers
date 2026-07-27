import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-rules');
}

export default function OfficialAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-rules" />;
}
