import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-4-evo-servers');
}

export default function Unline74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="unline-7-4-evo-servers" />;
}
