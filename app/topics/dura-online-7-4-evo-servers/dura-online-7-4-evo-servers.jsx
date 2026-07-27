import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-4-evo-servers');
}

export default function DuraOnline74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-4-evo-servers" />;
}
