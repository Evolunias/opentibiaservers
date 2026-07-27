import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-seasonal-server-canada');
}

export default function ShadowcoresSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-seasonal-server-canada" />;
}
