import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-seasonal-server-brazil');
}

export default function ThorniaSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-seasonal-server-brazil" />;
}
