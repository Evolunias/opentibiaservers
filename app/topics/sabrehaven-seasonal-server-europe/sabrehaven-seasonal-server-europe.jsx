import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-seasonal-server-europe');
}

export default function SabrehavenSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-seasonal-server-europe" />;
}
