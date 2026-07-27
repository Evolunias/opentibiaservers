import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-website');
}

export default function HighrateDuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-website" />;
}
