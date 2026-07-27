import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-seasonal-server-germany');
}

export default function DuraOnlineSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-seasonal-server-germany" />;
}
