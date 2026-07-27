import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-online');
}

export default function SaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="saintsot-online" />;
}
