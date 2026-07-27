import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-website');
}

export default function TopTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-website" />;
}
