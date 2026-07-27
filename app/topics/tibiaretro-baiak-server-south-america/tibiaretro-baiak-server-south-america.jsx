import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-baiak-server-south-america');
}

export default function TibiaretroBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-baiak-server-south-america" />;
}
