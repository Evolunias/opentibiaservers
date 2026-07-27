import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-seasonal-server-argentina');
}

export default function DuraOnlineSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-seasonal-server-argentina" />;
}
