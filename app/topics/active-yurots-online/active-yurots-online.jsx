import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-online');
}

export default function ActiveYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-online" />;
}
