import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-baiak-server-latin-america');
}

export default function CanobBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-baiak-server-latin-america" />;
}
