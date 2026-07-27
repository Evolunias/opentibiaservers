import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-6-evo-servers');
}

export default function Alastera76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-6-evo-servers" />;
}
