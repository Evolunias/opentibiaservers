import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-baiak-server-brazil');
}

export default function NepreniaBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-baiak-server-brazil" />;
}
