import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-website');
}

export default function AlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="alastera-website" />;
}
