import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-evo-servers');
}

export default function DuraOnline14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-evo-servers" />;
}
