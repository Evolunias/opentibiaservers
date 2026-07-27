import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-online');
}

export default function CustomYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-online" />;
}
