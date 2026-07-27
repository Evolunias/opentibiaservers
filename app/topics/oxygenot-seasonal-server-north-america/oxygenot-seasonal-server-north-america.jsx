import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-seasonal-server-north-america');
}

export default function OxygenotSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-seasonal-server-north-america" />;
}
