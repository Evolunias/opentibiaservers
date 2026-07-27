import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-seasonal-server');
}

export default function CalmeraOt14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-seasonal-server" />;
}
