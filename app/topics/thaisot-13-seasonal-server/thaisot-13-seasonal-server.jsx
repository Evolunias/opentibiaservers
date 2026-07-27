import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-seasonal-server');
}

export default function Thaisot13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-seasonal-server" />;
}
