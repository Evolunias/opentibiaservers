import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-seasonal-server-canada');
}

export default function UnlineSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="unline-seasonal-server-canada" />;
}
