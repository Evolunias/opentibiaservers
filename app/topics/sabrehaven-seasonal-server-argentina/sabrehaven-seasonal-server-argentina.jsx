import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-seasonal-server-argentina');
}

export default function SabrehavenSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-seasonal-server-argentina" />;
}
