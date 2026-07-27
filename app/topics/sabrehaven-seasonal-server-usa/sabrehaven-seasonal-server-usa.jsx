import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-seasonal-server-usa');
}

export default function SabrehavenSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-seasonal-server-usa" />;
}
