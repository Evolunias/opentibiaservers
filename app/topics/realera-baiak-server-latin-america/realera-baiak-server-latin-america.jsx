import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-baiak-server-latin-america');
}

export default function RealeraBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-baiak-server-latin-america" />;
}
