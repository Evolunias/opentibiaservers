import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-seasonal-server-france');
}

export default function OxygenotSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-seasonal-server-france" />;
}
