import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-9-6-evo-server');
}

export default function DuraOnline96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-9-6-evo-server" />;
}
