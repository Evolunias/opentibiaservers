import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-guide');
}

export default function TopSabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-guide" />;
}
