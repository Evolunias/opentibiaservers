import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-website');
}

export default function TopThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-website" />;
}
