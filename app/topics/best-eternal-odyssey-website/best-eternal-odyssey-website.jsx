import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey-website');
}

export default function BestEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey-website" />;
}
