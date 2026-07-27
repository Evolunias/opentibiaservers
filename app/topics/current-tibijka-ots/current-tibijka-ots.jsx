import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-ots');
}

export default function CurrentTibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-ots" />;
}
