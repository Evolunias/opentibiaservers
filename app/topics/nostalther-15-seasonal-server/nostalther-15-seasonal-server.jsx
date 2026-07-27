import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-seasonal-server');
}

export default function Nostalther15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-seasonal-server" />;
}
