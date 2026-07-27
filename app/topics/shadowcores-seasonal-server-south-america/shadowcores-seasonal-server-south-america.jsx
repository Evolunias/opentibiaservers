import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-seasonal-server-south-america');
}

export default function ShadowcoresSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-seasonal-server-south-america" />;
}
