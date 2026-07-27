import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-ot');
}

export default function CurrentEternalOdysseyOtKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-ot" />;
}
