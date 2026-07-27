import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-seasonal-server-uk');
}

export default function DuraOnlineSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="dura-online-seasonal-server-uk" />;
}
