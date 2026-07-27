import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-seasonal-server-north-america');
}

export default function SabrehavenSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-seasonal-server-north-america" />;
}
