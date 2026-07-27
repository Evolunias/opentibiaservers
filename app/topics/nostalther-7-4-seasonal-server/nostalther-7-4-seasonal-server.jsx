import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-4-seasonal-server');
}

export default function Nostalther74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-4-seasonal-server" />;
}
