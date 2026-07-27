import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-baiak-server-latin-america');
}

export default function ThorniaBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-baiak-server-latin-america" />;
}
