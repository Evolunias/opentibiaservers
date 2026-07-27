import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-baiak-server-canada');
}

export default function NepreniaBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-baiak-server-canada" />;
}
