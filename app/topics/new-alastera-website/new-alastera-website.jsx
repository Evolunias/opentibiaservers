import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-website');
}

export default function NewAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-website" />;
}
