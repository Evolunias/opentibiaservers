import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-6-seasonal-server');
}

export default function Blazera76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-6-seasonal-server" />;
}
