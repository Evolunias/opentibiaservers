import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-seasonal-server-canada');
}

export default function MediviaSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-seasonal-server-canada" />;
}
