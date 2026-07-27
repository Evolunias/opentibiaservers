import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-server-mexico');
}

export default function OxygenotEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-server-mexico" />;
}
