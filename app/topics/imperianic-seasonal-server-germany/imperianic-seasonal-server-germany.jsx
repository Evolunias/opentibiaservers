import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-seasonal-server-germany');
}

export default function ImperianicSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-seasonal-server-germany" />;
}
