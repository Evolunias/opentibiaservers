import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-seasonal-server-sweden');
}

export default function TibiaretroSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-seasonal-server-sweden" />;
}
