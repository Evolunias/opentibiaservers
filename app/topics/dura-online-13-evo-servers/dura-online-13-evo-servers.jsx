import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-13-evo-servers');
}

export default function DuraOnline13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-13-evo-servers" />;
}
