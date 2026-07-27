import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria');
}

export default function ActiveAmeriaKeywordPage() {
  return <StaticKeywordPage slug="active-ameria" />;
}
