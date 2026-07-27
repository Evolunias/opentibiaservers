import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-evo-server-germany');
}

export default function DuraOnlineEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-evo-server-germany" />;
}
