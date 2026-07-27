import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-servers-brazil');
}

export default function TibiaretroEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-servers-brazil" />;
}
