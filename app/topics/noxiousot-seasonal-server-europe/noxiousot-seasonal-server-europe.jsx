import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-seasonal-server-europe');
}

export default function NoxiousotSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-seasonal-server-europe" />;
}
