import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-13-evo-servers');
}

export default function Unline13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="unline-13-evo-servers" />;
}
