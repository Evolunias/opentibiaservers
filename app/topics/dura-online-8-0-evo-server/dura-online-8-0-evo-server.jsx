import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-0-evo-server');
}

export default function DuraOnline80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-0-evo-server" />;
}
