import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-website');
}

export default function TopAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-website" />;
}
