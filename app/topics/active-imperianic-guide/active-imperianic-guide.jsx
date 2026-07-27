import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-guide');
}

export default function ActiveImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-guide" />;
}
