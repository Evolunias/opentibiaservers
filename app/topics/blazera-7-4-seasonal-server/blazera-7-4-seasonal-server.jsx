import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-4-seasonal-server');
}

export default function Blazera74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-4-seasonal-server" />;
}
