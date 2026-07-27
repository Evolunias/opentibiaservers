import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-seasonal-server');
}

export default function Nostalther13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-seasonal-server" />;
}
