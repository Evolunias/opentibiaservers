import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria');
}

export default function CustomAmeriaKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria" />;
}
