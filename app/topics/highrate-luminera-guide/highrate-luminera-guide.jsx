import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-guide');
}

export default function HighrateLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-guide" />;
}
