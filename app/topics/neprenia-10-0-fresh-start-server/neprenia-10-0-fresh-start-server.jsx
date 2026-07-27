import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-fresh-start-server');
}

export default function Neprenia100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-fresh-start-server" />;
}
