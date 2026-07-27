import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-seasonal-server');
}

export default function Thaisot15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-seasonal-server" />;
}
