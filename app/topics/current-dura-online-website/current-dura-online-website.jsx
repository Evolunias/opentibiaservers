import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-website');
}

export default function CurrentDuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-website" />;
}
