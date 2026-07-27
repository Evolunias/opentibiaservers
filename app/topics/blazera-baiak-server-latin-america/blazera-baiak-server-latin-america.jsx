import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-baiak-server-latin-america');
}

export default function BlazeraBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-baiak-server-latin-america" />;
}
