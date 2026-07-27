import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-online');
}

export default function NewEvoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-online" />;
}
