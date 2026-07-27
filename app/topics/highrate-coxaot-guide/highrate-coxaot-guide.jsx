import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-guide');
}

export default function HighrateCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-guide" />;
}
