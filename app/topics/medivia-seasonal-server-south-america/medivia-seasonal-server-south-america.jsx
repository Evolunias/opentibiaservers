import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-seasonal-server-south-america');
}

export default function MediviaSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-seasonal-server-south-america" />;
}
