import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-evo-server-canada');
}

export default function DuraOnlineEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-evo-server-canada" />;
}
