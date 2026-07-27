import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-seasonal-server-europe');
}

export default function RealestaSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realesta-seasonal-server-europe" />;
}
