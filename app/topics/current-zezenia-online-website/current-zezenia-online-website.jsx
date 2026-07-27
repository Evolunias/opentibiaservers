import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-website');
}

export default function CurrentZezeniaOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-website" />;
}
