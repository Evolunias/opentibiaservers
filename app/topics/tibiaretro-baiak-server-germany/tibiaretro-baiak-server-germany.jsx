import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-baiak-server-germany');
}

export default function TibiaretroBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-baiak-server-germany" />;
}
