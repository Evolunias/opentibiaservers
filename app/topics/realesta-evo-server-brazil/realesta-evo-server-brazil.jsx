import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-evo-server-brazil');
}

export default function RealestaEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-evo-server-brazil" />;
}
