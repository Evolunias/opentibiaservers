import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-guide');
}

export default function NewRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="new-realera-guide" />;
}
