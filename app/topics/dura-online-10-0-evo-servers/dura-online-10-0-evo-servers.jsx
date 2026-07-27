import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-10-0-evo-servers');
}

export default function DuraOnline100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-10-0-evo-servers" />;
}
