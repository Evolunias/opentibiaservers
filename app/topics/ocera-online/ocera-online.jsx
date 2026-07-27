import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-online');
}

export default function OceraOnlineKeywordPage() {
  return <StaticKeywordPage slug="ocera-online" />;
}
