import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera');
}

export default function CurrentAlasteraKeywordPage() {
  return <StaticKeywordPage slug="current-alastera" />;
}
