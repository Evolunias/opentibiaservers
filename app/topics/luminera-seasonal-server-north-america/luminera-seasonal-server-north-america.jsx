import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-seasonal-server-north-america');
}

export default function LumineraSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-seasonal-server-north-america" />;
}
