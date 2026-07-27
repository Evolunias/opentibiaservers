import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-evo-server-mexico');
}

export default function RealestaEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-evo-server-mexico" />;
}
