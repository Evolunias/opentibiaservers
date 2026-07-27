import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-website');
}

export default function BestAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-website" />;
}
