import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-0-seasonal-server');
}

export default function Thaisot80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-0-seasonal-server" />;
}
