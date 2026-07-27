import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-baiak-server-latin-america');
}

export default function NostaltherBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-baiak-server-latin-america" />;
}
