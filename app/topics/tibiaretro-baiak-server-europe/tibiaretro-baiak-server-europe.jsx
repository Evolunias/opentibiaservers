import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-baiak-server-europe');
}

export default function TibiaretroBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-baiak-server-europe" />;
}
