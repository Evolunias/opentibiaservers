import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-guide');
}

export default function OxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-guide" />;
}
