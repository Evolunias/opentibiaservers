import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-website');
}

export default function LowrateNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-website" />;
}
