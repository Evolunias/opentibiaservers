import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-seasonal-server-germany');
}

export default function ShadowcoresSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-seasonal-server-germany" />;
}
