import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-baiak-server-north-america');
}

export default function TibiaretroBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-baiak-server-north-america" />;
}
