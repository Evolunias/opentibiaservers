import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-guide');
}

export default function LowrateLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-guide" />;
}
