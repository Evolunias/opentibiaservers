import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-website');
}

export default function FreshStartThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-website" />;
}
