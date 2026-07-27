import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-seasonal-server');
}

export default function Blazera12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-seasonal-server" />;
}
