import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-6-seasonal-server');
}

export default function Blazera86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-6-seasonal-server" />;
}
