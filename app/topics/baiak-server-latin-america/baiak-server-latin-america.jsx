import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-latin-america');
}

export default function BaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-latin-america" />;
}
