import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-ots');
}

export default function LowrateEternalOdysseyOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-ots" />;
}
