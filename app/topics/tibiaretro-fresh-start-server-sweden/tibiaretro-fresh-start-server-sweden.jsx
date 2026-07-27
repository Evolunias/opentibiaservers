import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-fresh-start-server-sweden');
}

export default function TibiaretroFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-fresh-start-server-sweden" />;
}
