import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-website');
}

export default function TopEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-website" />;
}
