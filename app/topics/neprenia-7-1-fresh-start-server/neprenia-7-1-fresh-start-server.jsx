import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-1-fresh-start-server');
}

export default function Neprenia71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-1-fresh-start-server" />;
}
