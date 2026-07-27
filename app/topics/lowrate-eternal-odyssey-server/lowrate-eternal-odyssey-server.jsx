import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-server');
}

export default function LowrateEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-server" />;
}
