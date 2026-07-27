import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-seasonal-server-canada');
}

export default function LumineraSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-seasonal-server-canada" />;
}
