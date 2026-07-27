import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-guide');
}

export default function RealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="realesta-guide" />;
}
