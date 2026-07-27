import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-baiak-server-latin-america');
}

export default function OxygenotBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-baiak-server-latin-america" />;
}
