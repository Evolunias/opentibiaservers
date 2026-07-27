import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-guide');
}

export default function NewNostaltherGuideKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-guide" />;
}
