import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-6-fresh-start-server');
}

export default function Neprenia86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-6-fresh-start-server" />;
}
