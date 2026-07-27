import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-baiak-server-mexico');
}

export default function NepreniaBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-baiak-server-mexico" />;
}
