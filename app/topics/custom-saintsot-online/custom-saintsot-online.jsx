import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-online');
}

export default function CustomSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-online" />;
}
