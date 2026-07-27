import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-website');
}

export default function CustomKasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-website" />;
}
