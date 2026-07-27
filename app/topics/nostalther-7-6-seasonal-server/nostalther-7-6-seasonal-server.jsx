import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-6-seasonal-server');
}

export default function Nostalther76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-6-seasonal-server" />;
}
