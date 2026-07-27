import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-seasonal-server-north-america');
}

export default function ShadowcoresSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-seasonal-server-north-america" />;
}
