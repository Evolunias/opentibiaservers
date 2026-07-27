import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-baiak-server-argentina');
}

export default function NepreniaBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-baiak-server-argentina" />;
}
