import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-seasonal-server');
}

export default function Nostalther11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-seasonal-server" />;
}
