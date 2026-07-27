import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria');
}

export default function NewAmeriaKeywordPage() {
  return <StaticKeywordPage slug="new-ameria" />;
}
