import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-online');
}

export default function ActiveSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-online" />;
}
