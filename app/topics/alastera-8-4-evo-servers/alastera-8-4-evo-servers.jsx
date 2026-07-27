import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-4-evo-servers');
}

export default function Alastera84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-4-evo-servers" />;
}
