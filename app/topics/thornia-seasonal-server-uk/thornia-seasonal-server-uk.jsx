import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-seasonal-server-uk');
}

export default function ThorniaSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-seasonal-server-uk" />;
}
