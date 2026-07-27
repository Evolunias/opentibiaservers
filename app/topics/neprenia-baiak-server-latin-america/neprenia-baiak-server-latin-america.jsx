import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-baiak-server-latin-america');
}

export default function NepreniaBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-baiak-server-latin-america" />;
}
