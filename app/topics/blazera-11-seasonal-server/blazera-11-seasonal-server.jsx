import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-seasonal-server');
}

export default function Blazera11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-seasonal-server" />;
}
