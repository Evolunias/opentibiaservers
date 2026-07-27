import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-seasonal-server');
}

export default function Midhem11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-seasonal-server" />;
}
