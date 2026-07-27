import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-seasonal-server-canada');
}

export default function SabrehavenSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-seasonal-server-canada" />;
}
