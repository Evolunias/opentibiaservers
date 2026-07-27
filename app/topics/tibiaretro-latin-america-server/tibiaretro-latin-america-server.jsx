import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-latin-america-server');
}

export default function TibiaretroLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-latin-america-server" />;
}
