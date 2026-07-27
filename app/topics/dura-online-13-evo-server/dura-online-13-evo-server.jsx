import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-13-evo-server');
}

export default function DuraOnline13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-13-evo-server" />;
}
