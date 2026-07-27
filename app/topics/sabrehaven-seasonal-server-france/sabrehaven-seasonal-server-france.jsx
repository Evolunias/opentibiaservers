import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-seasonal-server-france');
}

export default function SabrehavenSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-seasonal-server-france" />;
}
