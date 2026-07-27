import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-1-fresh-start-server');
}

export default function Neprenia81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-1-fresh-start-server" />;
}
