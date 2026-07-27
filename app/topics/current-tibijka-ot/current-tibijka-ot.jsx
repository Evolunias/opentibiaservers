import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-ot');
}

export default function CurrentTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-ot" />;
}
