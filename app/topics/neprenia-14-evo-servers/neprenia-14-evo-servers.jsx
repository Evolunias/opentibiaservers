import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-evo-servers');
}

export default function Neprenia14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-evo-servers" />;
}
