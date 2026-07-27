import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-website');
}

export default function TopImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-website" />;
}
