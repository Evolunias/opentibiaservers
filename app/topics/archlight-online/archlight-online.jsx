import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-online');
}

export default function ArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="archlight-online" />;
}
