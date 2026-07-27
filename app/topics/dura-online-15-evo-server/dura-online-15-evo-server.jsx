import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-15-evo-server');
}

export default function DuraOnline15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-15-evo-server" />;
}
