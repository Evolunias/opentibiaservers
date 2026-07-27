import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-seasonal-server-france');
}

export default function DuraOnlineSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-seasonal-server-france" />;
}
