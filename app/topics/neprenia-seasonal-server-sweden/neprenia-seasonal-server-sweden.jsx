import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-seasonal-server-sweden');
}

export default function NepreniaSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-seasonal-server-sweden" />;
}
