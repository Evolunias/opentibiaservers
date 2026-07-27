import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-baiak-server-france');
}

export default function TibiaretroBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-baiak-server-france" />;
}
