import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-seasonal-server-europe');
}

export default function LumineraSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-seasonal-server-europe" />;
}
