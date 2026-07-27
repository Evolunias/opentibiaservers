import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-72-evo-server');
}

export default function DuraOnline772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-72-evo-server" />;
}
