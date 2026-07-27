import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-guide');
}

export default function CustomSabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-guide" />;
}
