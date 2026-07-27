import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria');
}

export default function LowrateAmeriaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria" />;
}
