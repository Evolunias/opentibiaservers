import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-11-evo-server');
}

export default function DuraOnline11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-11-evo-server" />;
}
