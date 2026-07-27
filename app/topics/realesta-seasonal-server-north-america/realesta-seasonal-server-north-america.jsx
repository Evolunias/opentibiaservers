import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-seasonal-server-north-america');
}

export default function RealestaSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-seasonal-server-north-america" />;
}
