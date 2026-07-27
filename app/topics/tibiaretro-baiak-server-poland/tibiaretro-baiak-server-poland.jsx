import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-baiak-server-poland');
}

export default function TibiaretroBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-baiak-server-poland" />;
}
