import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-72-evo-servers');
}

export default function Neprenia772EvoServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-72-evo-servers" />;
}
