import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-6-evo-servers');
}

export default function DuraOnline76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-6-evo-servers" />;
}
