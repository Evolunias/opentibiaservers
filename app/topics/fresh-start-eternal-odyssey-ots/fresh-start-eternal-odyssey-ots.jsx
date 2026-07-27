import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eternal-odyssey-ots');
}

export default function FreshStartEternalOdysseyOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eternal-odyssey-ots" />;
}
