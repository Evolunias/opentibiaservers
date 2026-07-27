import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-online');
}

export default function NewYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-online" />;
}
