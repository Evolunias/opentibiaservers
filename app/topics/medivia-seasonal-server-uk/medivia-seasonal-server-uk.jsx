import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-seasonal-server-uk');
}

export default function MediviaSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-seasonal-server-uk" />;
}
