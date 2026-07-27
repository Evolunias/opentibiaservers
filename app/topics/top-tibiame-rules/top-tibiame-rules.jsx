import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-rules');
}

export default function TopTibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-rules" />;
}
