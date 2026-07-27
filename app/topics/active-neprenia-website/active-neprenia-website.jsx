import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-website');
}

export default function ActiveNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-website" />;
}
