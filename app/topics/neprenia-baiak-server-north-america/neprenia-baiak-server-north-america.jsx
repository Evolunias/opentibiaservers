import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-baiak-server-north-america');
}

export default function NepreniaBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-baiak-server-north-america" />;
}
