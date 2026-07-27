import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-latin-america-servers');
}

export default function TibiaretroLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-latin-america-servers" />;
}
