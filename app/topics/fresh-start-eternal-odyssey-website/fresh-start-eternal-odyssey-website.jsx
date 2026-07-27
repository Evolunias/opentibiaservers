import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eternal-odyssey-website');
}

export default function FreshStartEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eternal-odyssey-website" />;
}
