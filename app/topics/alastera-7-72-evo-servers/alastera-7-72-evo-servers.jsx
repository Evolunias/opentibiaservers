import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-72-evo-servers');
}

export default function Alastera772EvoServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-72-evo-servers" />;
}
