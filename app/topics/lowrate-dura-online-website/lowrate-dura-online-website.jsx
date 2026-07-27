import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-website');
}

export default function LowrateDuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-website" />;
}
