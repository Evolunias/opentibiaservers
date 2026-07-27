import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-seasonal-server-poland');
}

export default function ImperianicSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-seasonal-server-poland" />;
}
