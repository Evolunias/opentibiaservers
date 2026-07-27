import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-guide');
}

export default function LowrateElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-guide" />;
}
