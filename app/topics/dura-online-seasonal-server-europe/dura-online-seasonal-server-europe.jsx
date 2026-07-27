import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-seasonal-server-europe');
}

export default function DuraOnlineSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-seasonal-server-europe" />;
}
