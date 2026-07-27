import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-seasonal-server-poland');
}

export default function NoxiousotSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-seasonal-server-poland" />;
}
