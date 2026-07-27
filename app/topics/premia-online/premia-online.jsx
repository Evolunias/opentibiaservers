import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-online');
}

export default function PremiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="premia-online" />;
}
