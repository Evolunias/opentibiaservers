import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-online');
}

export default function BestSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-online" />;
}
