import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-guide');
}

export default function CurrentNostaltherGuideKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-guide" />;
}
