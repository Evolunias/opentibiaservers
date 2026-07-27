import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-6-evo-servers');
}

export default function Neprenia76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-6-evo-servers" />;
}
