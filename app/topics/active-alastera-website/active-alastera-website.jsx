import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-website');
}

export default function ActiveAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-website" />;
}
