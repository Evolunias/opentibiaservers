import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-baiak-server-canada');
}

export default function TibiaretroBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-baiak-server-canada" />;
}
