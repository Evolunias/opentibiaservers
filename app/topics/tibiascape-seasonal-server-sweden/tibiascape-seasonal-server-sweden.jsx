import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-seasonal-server-sweden');
}

export default function TibiascapeSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-seasonal-server-sweden" />;
}
