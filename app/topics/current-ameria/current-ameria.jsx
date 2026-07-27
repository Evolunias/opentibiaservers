import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria');
}

export default function CurrentAmeriaKeywordPage() {
  return <StaticKeywordPage slug="current-ameria" />;
}
