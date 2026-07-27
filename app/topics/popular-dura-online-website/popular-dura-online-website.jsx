import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-website');
}

export default function PopularDuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-website" />;
}
