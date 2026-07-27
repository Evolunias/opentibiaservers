import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-seasonal-server-north-america');
}

export default function DuraOnlineSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-seasonal-server-north-america" />;
}
