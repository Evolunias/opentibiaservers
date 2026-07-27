import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-online');
}

export default function CarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="carlinot-online" />;
}
