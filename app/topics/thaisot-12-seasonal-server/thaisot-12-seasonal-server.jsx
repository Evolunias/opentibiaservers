import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-seasonal-server');
}

export default function Thaisot12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-seasonal-server" />;
}
