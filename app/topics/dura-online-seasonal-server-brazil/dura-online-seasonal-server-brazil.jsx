import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-seasonal-server-brazil');
}

export default function DuraOnlineSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dura-online-seasonal-server-brazil" />;
}
