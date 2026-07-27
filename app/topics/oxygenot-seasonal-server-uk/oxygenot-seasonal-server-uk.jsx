import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-seasonal-server-uk');
}

export default function OxygenotSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-seasonal-server-uk" />;
}
