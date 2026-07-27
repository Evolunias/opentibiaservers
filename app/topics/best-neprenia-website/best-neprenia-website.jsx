import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-website');
}

export default function BestNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-website" />;
}
