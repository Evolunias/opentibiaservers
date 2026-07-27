import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-status-latin-america');
}

export default function BaiakStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-status-latin-america" />;
}
