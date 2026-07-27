import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-ots');
}

export default function CurrentEternalOdysseyOtsKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-ots" />;
}
