import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-guide');
}

export default function ActiveRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-guide" />;
}
