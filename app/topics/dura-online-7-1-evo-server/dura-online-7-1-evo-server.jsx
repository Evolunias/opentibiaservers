import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-1-evo-server');
}

export default function DuraOnline71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-1-evo-server" />;
}
