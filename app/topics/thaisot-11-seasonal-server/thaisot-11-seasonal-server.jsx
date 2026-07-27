import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-seasonal-server');
}

export default function Thaisot11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-seasonal-server" />;
}
