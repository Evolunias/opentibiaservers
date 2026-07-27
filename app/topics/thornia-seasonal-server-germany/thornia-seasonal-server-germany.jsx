import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-seasonal-server-germany');
}

export default function ThorniaSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-seasonal-server-germany" />;
}
