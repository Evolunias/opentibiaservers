import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-0-seasonal-server');
}

export default function Midhem100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-0-seasonal-server" />;
}
