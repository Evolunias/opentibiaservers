import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-seasonal-server-france');
}

export default function NostaltherSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-seasonal-server-france" />;
}
