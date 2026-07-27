import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-evo-server-south-america');
}

export default function MistOfDeathEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-evo-server-south-america" />;
}
