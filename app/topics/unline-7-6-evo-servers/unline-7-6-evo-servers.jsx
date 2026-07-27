import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-6-evo-servers');
}

export default function Unline76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="unline-7-6-evo-servers" />;
}
