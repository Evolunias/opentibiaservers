import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-website');
}

export default function OfficialEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-website" />;
}
