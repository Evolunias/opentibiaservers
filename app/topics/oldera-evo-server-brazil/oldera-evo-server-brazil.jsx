import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-evo-server-brazil');
}

export default function OlderaEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-evo-server-brazil" />;
}
