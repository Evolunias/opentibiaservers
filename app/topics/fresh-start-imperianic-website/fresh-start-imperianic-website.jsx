import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-website');
}

export default function FreshStartImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-website" />;
}
