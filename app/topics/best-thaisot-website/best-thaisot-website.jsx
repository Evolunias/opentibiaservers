import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-website');
}

export default function BestThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-website" />;
}
