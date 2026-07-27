import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-evo-servers');
}

export default function Alastera13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-evo-servers" />;
}
