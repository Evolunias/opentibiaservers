import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-seasonal-server-latin-america');
}

export default function SabrehavenSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-seasonal-server-latin-america" />;
}
