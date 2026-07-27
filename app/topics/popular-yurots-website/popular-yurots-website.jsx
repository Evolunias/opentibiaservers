import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-website');
}

export default function PopularYurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-website" />;
}
