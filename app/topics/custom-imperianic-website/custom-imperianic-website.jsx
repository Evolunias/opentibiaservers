import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-website');
}

export default function CustomImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-website" />;
}
