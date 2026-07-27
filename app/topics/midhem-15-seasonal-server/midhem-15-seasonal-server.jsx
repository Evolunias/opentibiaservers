import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-seasonal-server');
}

export default function Midhem15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-seasonal-server" />;
}
