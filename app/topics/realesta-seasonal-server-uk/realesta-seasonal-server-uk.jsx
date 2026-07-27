import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-seasonal-server-uk');
}

export default function RealestaSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-seasonal-server-uk" />;
}
