import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-ot-server');
}

export default function LowrateEternalOdysseyOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-ot-server" />;
}
