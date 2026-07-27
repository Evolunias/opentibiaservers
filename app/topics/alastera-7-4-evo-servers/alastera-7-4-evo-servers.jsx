import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-4-evo-servers');
}

export default function Alastera74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-4-evo-servers" />;
}
