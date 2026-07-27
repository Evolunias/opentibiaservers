import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-server-brazil');
}

export default function OxygenotEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-server-brazil" />;
}
