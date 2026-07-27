import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-online');
}

export default function CustomEvoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-online" />;
}
