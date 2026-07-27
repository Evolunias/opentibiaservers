import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-seasonal-server-sweden');
}

export default function MediviaSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-seasonal-server-sweden" />;
}
