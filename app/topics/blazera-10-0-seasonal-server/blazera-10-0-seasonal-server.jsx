import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-seasonal-server');
}

export default function Blazera100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-seasonal-server" />;
}
