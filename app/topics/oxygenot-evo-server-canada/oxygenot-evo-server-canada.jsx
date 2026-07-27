import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-server-canada');
}

export default function OxygenotEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-server-canada" />;
}
