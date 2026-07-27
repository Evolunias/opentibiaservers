import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-client');
}

export default function LowrateEternalOdysseyClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-client" />;
}
