import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-website');
}

export default function TopDuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-website" />;
}
