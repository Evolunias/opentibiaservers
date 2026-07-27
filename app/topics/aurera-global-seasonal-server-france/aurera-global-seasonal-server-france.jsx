import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-seasonal-server-france');
}

export default function AureraGlobalSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-seasonal-server-france" />;
}
