import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-website');
}

export default function FreshStartAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-website" />;
}
