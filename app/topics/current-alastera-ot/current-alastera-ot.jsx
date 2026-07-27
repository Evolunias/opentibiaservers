import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-ot');
}

export default function CurrentAlasteraOtKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-ot" />;
}
