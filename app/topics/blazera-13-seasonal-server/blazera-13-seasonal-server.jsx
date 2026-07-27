import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-seasonal-server');
}

export default function Blazera13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-seasonal-server" />;
}
