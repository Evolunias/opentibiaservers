import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-seasonal-server-poland');
}

export default function DuraOnlineSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-seasonal-server-poland" />;
}
