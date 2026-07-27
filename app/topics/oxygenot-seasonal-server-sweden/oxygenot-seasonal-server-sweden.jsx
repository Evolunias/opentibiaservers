import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-seasonal-server-sweden');
}

export default function OxygenotSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-seasonal-server-sweden" />;
}
