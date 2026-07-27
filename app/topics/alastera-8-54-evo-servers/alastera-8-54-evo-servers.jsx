import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-54-evo-servers');
}

export default function Alastera854EvoServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-54-evo-servers" />;
}
