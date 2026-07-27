import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-fresh-start-server');
}

export default function Neprenia11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-fresh-start-server" />;
}
