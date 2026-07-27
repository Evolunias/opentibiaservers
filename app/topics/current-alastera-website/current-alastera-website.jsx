import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-website');
}

export default function CurrentAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-website" />;
}
