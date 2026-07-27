import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-seasonal-server-poland');
}

export default function ThorniaSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-seasonal-server-poland" />;
}
