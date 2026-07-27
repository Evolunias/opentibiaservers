import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-online');
}

export default function NewOxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-online" />;
}
