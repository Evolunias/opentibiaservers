import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-website');
}

export default function LowrateNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-website" />;
}
