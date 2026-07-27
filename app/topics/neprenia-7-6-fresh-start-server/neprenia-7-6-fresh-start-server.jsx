import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-6-fresh-start-server');
}

export default function Neprenia76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-6-fresh-start-server" />;
}
