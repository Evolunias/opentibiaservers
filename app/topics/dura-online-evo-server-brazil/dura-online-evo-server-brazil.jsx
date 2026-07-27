import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-evo-server-brazil');
}

export default function DuraOnlineEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dura-online-evo-server-brazil" />;
}
