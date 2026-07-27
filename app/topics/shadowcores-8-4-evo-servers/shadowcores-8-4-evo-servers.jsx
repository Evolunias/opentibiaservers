import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-evo-servers');
}

export default function Shadowcores84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-evo-servers" />;
}
