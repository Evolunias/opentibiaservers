import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-online');
}

export default function NoResetSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-online" />;
}
