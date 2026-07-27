import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-ot-server');
}

export default function CurrentEternalOdysseyOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-ot-server" />;
}
