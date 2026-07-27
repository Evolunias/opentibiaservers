import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-guide');
}

export default function NewRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-guide" />;
}
