import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka');
}

export default function CustomTibijkaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka" />;
}
