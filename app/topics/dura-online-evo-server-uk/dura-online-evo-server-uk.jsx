import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-evo-server-uk');
}

export default function DuraOnlineEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="dura-online-evo-server-uk" />;
}
