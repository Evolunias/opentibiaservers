import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-ot');
}

export default function LowrateEternalOdysseyOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-ot" />;
}
