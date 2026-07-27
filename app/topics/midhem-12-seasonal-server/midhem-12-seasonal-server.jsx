import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-seasonal-server');
}

export default function Midhem12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-seasonal-server" />;
}
