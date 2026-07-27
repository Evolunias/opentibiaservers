import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-baiak-server-latin-america');
}

export default function RealestaBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-baiak-server-latin-america" />;
}
