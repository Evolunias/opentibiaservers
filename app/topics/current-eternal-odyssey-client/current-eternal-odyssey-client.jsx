import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-client');
}

export default function CurrentEternalOdysseyClientKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-client" />;
}
