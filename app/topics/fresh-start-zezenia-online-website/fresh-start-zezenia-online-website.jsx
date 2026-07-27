import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zezenia-online-website');
}

export default function FreshStartZezeniaOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zezenia-online-website" />;
}
