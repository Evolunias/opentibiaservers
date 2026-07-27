import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-seasonal-server-europe');
}

export default function ThorniaSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-seasonal-server-europe" />;
}
