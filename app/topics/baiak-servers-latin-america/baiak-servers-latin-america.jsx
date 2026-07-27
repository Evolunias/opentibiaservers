import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-servers-latin-america');
}

export default function BaiakServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-servers-latin-america" />;
}
