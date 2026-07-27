import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-seasonal-server-europe');
}

export default function MediviaSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-seasonal-server-europe" />;
}
