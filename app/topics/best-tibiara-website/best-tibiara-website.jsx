import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-website');
}

export default function BestTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-website" />;
}
