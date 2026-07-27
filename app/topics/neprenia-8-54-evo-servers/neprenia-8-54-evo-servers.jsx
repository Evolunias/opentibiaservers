import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-54-evo-servers');
}

export default function Neprenia854EvoServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-54-evo-servers" />;
}
