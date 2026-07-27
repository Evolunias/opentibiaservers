import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-website');
}

export default function CurrentKasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-website" />;
}
