import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-website');
}

export default function BestKasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-website" />;
}
