import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-seasonal-server-sweden');
}

export default function NtoStarSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-seasonal-server-sweden" />;
}
