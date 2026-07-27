import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-seasonal-server-uk');
}

export default function SabrehavenSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-seasonal-server-uk" />;
}
