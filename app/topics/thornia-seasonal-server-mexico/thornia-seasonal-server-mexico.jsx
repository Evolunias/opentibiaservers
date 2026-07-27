import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-seasonal-server-mexico');
}

export default function ThorniaSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-seasonal-server-mexico" />;
}
