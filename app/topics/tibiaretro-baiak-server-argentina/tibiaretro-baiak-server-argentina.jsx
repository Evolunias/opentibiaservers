import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-baiak-server-argentina');
}

export default function TibiaretroBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-baiak-server-argentina" />;
}
