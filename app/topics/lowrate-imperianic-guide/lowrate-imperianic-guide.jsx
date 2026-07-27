import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-guide');
}

export default function LowrateImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-guide" />;
}
