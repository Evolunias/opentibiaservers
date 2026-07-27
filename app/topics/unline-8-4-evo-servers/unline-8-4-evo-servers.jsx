import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-4-evo-servers');
}

export default function Unline84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="unline-8-4-evo-servers" />;
}
