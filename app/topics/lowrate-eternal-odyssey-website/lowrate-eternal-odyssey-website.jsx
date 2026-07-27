import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-website');
}

export default function LowrateEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-website" />;
}
