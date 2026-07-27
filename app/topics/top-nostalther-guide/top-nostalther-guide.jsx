import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-guide');
}

export default function TopNostaltherGuideKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-guide" />;
}
