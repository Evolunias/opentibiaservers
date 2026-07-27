import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-0-evo-servers');
}

export default function Neprenia80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-0-evo-servers" />;
}
