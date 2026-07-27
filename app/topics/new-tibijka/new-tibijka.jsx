import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka');
}

export default function NewTibijkaKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka" />;
}
