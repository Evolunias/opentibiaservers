import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-evo-server-canada');
}

export default function RealestaEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-evo-server-canada" />;
}
