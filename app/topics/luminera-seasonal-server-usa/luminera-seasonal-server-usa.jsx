import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-seasonal-server-usa');
}

export default function LumineraSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-seasonal-server-usa" />;
}
