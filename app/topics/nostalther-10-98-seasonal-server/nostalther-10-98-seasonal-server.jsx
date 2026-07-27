import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-98-seasonal-server');
}

export default function Nostalther1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-98-seasonal-server" />;
}
