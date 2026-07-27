import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-4-evo-servers');
}

export default function DuraOnline84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-4-evo-servers" />;
}
