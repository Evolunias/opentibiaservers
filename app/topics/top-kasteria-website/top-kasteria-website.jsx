import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-website');
}

export default function TopKasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-website" />;
}
