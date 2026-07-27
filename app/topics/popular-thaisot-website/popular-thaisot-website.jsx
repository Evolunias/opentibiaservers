import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-website');
}

export default function PopularThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-website" />;
}
