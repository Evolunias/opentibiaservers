import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-6-seasonal-server');
}

export default function Nostalther86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-6-seasonal-server" />;
}
