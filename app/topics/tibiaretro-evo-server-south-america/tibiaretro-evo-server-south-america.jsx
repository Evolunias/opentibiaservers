import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-server-south-america');
}

export default function TibiaretroEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-server-south-america" />;
}
