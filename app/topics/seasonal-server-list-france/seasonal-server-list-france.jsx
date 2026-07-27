import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-list-france');
}

export default function SeasonalServerListFranceKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-list-france" />;
}
