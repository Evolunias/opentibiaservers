import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey');
}

export default function LowrateEternalOdysseyKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey" />;
}
