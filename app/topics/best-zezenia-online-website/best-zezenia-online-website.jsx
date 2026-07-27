import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zezenia-online-website');
}

export default function BestZezeniaOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-zezenia-online-website" />;
}
