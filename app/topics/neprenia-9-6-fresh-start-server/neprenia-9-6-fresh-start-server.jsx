import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-fresh-start-server');
}

export default function Neprenia96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-fresh-start-server" />;
}
