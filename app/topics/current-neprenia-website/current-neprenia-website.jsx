import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-website');
}

export default function CurrentNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-website" />;
}
