import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka');
}

export default function ActiveTibijkaKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka" />;
}
