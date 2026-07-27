import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-website');
}

export default function ActiveKasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-website" />;
}
