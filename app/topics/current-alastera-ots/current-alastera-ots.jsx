import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-ots');
}

export default function CurrentAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-ots" />;
}
