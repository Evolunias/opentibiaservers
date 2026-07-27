import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-client');
}

export default function CurrentTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-client" />;
}
