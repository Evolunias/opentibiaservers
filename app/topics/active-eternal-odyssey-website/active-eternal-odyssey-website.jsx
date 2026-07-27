import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-website');
}

export default function ActiveEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-website" />;
}
