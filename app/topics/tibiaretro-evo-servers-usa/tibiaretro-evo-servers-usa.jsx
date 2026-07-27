import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-servers-usa');
}

export default function TibiaretroEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-servers-usa" />;
}
