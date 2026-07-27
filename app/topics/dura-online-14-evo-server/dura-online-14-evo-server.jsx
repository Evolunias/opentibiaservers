import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-evo-server');
}

export default function DuraOnline14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-evo-server" />;
}
