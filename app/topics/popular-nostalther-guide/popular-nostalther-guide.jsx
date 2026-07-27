import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-guide');
}

export default function PopularNostaltherGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-guide" />;
}
