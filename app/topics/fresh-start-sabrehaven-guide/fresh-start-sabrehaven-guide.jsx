import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-guide');
}

export default function FreshStartSabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-guide" />;
}
