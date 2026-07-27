import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-guide');
}

export default function ActiveSabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-guide" />;
}
