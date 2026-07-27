import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-servers-poland');
}

export default function TibiaretroEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-servers-poland" />;
}
