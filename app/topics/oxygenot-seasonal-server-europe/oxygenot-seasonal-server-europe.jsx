import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-seasonal-server-europe');
}

export default function OxygenotSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-seasonal-server-europe" />;
}
