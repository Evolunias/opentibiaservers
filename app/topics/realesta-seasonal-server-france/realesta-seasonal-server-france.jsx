import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-seasonal-server-france');
}

export default function RealestaSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-seasonal-server-france" />;
}
