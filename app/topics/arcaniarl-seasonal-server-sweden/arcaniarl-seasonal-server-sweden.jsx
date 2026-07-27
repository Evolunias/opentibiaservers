import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-seasonal-server-sweden');
}

export default function ArcaniarlSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-seasonal-server-sweden" />;
}
