import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-website');
}

export default function ThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="thaisot-website" />;
}
