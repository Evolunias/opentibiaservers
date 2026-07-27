import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-seasonal-server-mexico');
}

export default function SabrehavenSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-seasonal-server-mexico" />;
}
