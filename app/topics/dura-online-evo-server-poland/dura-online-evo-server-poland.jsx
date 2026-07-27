import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-evo-server-poland');
}

export default function DuraOnlineEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-evo-server-poland" />;
}
