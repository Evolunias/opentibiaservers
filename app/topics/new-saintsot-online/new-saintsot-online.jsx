import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-online');
}

export default function NewSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-online" />;
}
