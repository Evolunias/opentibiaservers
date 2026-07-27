import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-website');
}

export default function ActiveZezeniaOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-website" />;
}
