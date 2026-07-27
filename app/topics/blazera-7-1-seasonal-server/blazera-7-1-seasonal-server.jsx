import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-1-seasonal-server');
}

export default function Blazera71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-1-seasonal-server" />;
}
