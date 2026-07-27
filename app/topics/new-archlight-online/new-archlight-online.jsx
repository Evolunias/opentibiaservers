import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-online');
}

export default function NewArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-online" />;
}
