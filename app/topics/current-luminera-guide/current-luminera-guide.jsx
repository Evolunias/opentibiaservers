import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-guide');
}

export default function CurrentLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-guide" />;
}
