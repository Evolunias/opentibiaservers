import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-evo-server-argentina');
}

export default function DuraOnlineEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-evo-server-argentina" />;
}
