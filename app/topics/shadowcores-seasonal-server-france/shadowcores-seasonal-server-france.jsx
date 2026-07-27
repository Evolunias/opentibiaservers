import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-seasonal-server-france');
}

export default function ShadowcoresSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-seasonal-server-france" />;
}
