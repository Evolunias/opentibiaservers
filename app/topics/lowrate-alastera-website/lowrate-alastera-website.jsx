import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-website');
}

export default function LowrateAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-website" />;
}
