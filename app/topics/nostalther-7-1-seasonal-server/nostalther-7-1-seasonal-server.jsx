import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-1-seasonal-server');
}

export default function Nostalther71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-1-seasonal-server" />;
}
