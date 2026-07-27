import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-evo-server-usa');
}

export default function DuraOnlineEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-evo-server-usa" />;
}
