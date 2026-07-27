import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-seasonal-server-north-america');
}

export default function UnlineSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-seasonal-server-north-america" />;
}
