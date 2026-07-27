import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-seasonal-server-uk');
}

export default function NoxiousotSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-seasonal-server-uk" />;
}
