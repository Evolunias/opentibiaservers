import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-seasonal-server-france');
}

export default function MediviaSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-seasonal-server-france" />;
}
