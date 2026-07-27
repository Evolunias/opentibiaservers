import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-website');
}

export default function FreshStartKasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-website" />;
}
