import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-website');
}

export default function CustomEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-website" />;
}
