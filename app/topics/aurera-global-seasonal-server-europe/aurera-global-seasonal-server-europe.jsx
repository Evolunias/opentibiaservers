import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-seasonal-server-europe');
}

export default function AureraGlobalSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-seasonal-server-europe" />;
}
