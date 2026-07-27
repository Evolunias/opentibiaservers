import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-online');
}

export default function NewThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-online" />;
}
