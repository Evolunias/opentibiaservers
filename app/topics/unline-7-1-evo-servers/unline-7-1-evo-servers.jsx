import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-1-evo-servers');
}

export default function Unline71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="unline-7-1-evo-servers" />;
}
