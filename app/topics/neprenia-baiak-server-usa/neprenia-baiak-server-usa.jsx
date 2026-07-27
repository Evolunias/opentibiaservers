import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-baiak-server-usa');
}

export default function NepreniaBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-baiak-server-usa" />;
}
