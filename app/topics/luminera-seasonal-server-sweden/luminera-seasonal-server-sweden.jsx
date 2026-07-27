import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-seasonal-server-sweden');
}

export default function LumineraSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-seasonal-server-sweden" />;
}
