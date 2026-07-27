import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-seasonal-server');
}

export default function Midhem76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-seasonal-server" />;
}
