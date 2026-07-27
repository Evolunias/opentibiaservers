import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-server-brazil');
}

export default function RealeraEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-server-brazil" />;
}
