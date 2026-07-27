import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-ots');
}

export default function TopEternalOdysseyOtsKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-ots" />;
}
