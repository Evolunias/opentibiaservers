import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-seasonal-server-north-america');
}

export default function MediviaSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-seasonal-server-north-america" />;
}
