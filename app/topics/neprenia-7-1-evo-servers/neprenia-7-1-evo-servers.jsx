import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-1-evo-servers');
}

export default function Neprenia71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-1-evo-servers" />;
}
