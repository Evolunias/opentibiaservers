import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-website');
}

export default function FreshStartNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-website" />;
}
