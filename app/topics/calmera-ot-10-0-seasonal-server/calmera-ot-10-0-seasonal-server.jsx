import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-seasonal-server');
}

export default function CalmeraOt100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-seasonal-server" />;
}
