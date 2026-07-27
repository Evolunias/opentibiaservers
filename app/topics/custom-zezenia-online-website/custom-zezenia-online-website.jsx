import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-website');
}

export default function CustomZezeniaOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-website" />;
}
