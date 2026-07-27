import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-fresh-start-server');
}

export default function Neprenia14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-fresh-start-server" />;
}
