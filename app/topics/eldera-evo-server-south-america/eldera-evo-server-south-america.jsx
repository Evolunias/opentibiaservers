import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-evo-server-south-america');
}

export default function ElderaEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-evo-server-south-america" />;
}
