import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-evo-server-south-america');
}

export default function RealestaEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-evo-server-south-america" />;
}
