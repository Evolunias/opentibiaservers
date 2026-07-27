import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-guide');
}

export default function NewLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-guide" />;
}
