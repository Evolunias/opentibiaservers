import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-guide');
}

export default function LowrateNostaltherGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-guide" />;
}
