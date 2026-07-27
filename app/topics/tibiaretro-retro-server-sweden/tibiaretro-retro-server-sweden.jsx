import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-retro-server-sweden');
}

export default function TibiaretroRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-retro-server-sweden" />;
}
