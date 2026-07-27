import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-72-seasonal-server');
}

export default function Midhem772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-72-seasonal-server" />;
}
