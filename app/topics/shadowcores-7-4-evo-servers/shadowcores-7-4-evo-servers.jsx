import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-evo-servers');
}

export default function Shadowcores74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-evo-servers" />;
}
