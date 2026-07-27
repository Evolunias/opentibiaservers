import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-1-seasonal-server');
}

export default function Blazera81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-1-seasonal-server" />;
}
