import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-website');
}

export default function HighrateZezeniaOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-website" />;
}
