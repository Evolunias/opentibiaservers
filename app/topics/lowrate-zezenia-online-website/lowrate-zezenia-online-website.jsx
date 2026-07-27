import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online-website');
}

export default function LowrateZezeniaOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online-website" />;
}
