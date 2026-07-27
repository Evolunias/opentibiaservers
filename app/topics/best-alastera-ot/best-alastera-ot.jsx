import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-ot');
}

export default function BestAlasteraOtKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-ot" />;
}
