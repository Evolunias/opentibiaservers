import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-website');
}

export default function CustomAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-website" />;
}
