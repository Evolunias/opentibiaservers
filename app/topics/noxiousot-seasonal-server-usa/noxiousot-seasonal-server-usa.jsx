import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-seasonal-server-usa');
}

export default function NoxiousotSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-seasonal-server-usa" />;
}
