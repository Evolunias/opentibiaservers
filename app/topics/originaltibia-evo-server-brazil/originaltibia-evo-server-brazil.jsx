import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-evo-server-brazil');
}

export default function OriginaltibiaEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-evo-server-brazil" />;
}
