import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-guide');
}

export default function HighrateSabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-guide" />;
}
