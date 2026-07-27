import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-98-seasonal-server');
}

export default function Blazera1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-98-seasonal-server" />;
}
