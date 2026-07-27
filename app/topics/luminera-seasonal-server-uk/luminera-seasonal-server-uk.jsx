import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-seasonal-server-uk');
}

export default function LumineraSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-seasonal-server-uk" />;
}
