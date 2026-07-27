import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-seasonal-server-usa');
}

export default function ThorniaSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-seasonal-server-usa" />;
}
