import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-online');
}

export default function ActiveEvoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-online" />;
}
