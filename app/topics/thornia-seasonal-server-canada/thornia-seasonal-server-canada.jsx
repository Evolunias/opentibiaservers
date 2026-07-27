import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-seasonal-server-canada');
}

export default function ThorniaSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-seasonal-server-canada" />;
}
