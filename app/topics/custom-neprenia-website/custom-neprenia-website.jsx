import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-website');
}

export default function CustomNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-website" />;
}
