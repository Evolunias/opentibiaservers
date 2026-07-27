import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-baiak-server-latin-america');
}

export default function ElderaBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-baiak-server-latin-america" />;
}
