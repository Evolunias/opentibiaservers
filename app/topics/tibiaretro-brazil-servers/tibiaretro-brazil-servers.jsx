import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-brazil-servers');
}

export default function TibiaretroBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-brazil-servers" />;
}
