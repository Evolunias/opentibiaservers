import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-seasonal-server-france');
}

export default function LumineraSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-seasonal-server-france" />;
}
