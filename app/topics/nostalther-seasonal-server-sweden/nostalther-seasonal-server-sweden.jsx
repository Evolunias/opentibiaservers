import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-seasonal-server-sweden');
}

export default function NostaltherSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-seasonal-server-sweden" />;
}
