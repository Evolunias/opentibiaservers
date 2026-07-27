import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-online');
}

export default function FreshStartArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-online" />;
}
