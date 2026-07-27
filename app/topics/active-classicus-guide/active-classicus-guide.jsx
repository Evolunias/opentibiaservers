import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-guide');
}

export default function ActiveClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-guide" />;
}
