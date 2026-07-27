import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-11-seasonal-server');
}

export default function Miracle11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-11-seasonal-server" />;
}
