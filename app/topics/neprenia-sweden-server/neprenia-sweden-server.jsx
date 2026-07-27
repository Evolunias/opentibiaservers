import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-sweden-server');
}

export default function NepreniaSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-sweden-server" />;
}
