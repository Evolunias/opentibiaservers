import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-client-latin-america');
}

export default function BaiakClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-client-latin-america" />;
}
