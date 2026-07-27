import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-seasonal-server');
}

export default function Blazera96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-seasonal-server" />;
}
