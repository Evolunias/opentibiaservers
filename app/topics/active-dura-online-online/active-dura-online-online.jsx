import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-online');
}

export default function ActiveDuraOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-online" />;
}
