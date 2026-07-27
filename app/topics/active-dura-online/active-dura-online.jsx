import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online');
}

export default function ActiveDuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online" />;
}
