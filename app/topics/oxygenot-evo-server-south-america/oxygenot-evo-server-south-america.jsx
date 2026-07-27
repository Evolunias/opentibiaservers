import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-server-south-america');
}

export default function OxygenotEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-server-south-america" />;
}
