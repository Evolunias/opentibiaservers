import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-seasonal-server');
}

export default function Blazera15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-seasonal-server" />;
}
