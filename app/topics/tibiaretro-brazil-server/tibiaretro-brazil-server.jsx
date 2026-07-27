import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-brazil-server');
}

export default function TibiaretroBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-brazil-server" />;
}
