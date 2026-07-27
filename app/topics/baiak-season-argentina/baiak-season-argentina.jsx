import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-season-argentina');
}

export default function BaiakSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-season-argentina" />;
}
