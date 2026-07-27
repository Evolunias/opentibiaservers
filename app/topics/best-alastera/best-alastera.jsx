import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera');
}

export default function BestAlasteraKeywordPage() {
  return <StaticKeywordPage slug="best-alastera" />;
}
