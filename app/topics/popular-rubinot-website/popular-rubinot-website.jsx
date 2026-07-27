import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-website');
}

export default function PopularRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-website" />;
}
