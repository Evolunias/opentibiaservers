import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-website');
}

export default function PopularZezeniaOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-website" />;
}
