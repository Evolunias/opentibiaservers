import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-guide');
}

export default function FreshStartNostaltherGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-guide" />;
}
