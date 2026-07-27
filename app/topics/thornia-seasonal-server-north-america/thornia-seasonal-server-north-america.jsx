import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-seasonal-server-north-america');
}

export default function ThorniaSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-seasonal-server-north-america" />;
}
