import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-fresh-start-server');
}

export default function Neprenia74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-fresh-start-server" />;
}
