import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-seasonal-server-france');
}

export default function ThorniaSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-seasonal-server-france" />;
}
