import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-baiak-server-sweden');
}

export default function TibiaretroBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-baiak-server-sweden" />;
}
