import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-1-evo-server');
}

export default function DuraOnline81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-1-evo-server" />;
}
