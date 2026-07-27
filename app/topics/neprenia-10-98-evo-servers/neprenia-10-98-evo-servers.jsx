import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-98-evo-servers');
}

export default function Neprenia1098EvoServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-98-evo-servers" />;
}
