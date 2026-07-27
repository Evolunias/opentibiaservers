import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-guide');
}

export default function BestSabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-guide" />;
}
