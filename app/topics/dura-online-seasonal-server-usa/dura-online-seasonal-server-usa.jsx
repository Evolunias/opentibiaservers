import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-seasonal-server-usa');
}

export default function DuraOnlineSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-seasonal-server-usa" />;
}
