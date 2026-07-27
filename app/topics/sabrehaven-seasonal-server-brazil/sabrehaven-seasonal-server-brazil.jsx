import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-seasonal-server-brazil');
}

export default function SabrehavenSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-seasonal-server-brazil" />;
}
