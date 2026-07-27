import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-website');
}

export default function LowrateThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-website" />;
}
