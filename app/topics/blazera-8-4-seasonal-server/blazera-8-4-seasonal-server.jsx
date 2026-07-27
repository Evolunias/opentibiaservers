import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-4-seasonal-server');
}

export default function Blazera84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-4-seasonal-server" />;
}
