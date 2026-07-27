import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-website');
}

export default function CurrentEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-website" />;
}
