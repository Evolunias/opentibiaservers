import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-website');
}

export default function CurrentThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-website" />;
}
