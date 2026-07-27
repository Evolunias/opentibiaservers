import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-fresh-start-server');
}

export default function Neprenia12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-fresh-start-server" />;
}
