import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-website');
}

export default function LowrateImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-website" />;
}
