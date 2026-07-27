import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-0-evo-servers');
}

export default function Alastera100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-0-evo-servers" />;
}
