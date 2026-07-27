import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-ots');
}

export default function BestAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-ots" />;
}
