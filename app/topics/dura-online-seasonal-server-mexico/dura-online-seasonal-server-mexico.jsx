import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-seasonal-server-mexico');
}

export default function DuraOnlineSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="dura-online-seasonal-server-mexico" />;
}
