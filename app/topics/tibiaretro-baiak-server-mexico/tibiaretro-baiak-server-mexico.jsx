import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-baiak-server-mexico');
}

export default function TibiaretroBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-baiak-server-mexico" />;
}
