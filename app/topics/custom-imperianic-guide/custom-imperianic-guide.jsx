import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-guide');
}

export default function CustomImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-guide" />;
}
