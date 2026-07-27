import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-guide');
}

export default function ActiveRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="active-realera-guide" />;
}
