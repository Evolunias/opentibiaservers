import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-server');
}

export default function CurrentEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-server" />;
}
