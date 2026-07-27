import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-seasonal-server');
}

export default function Nostalther12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-seasonal-server" />;
}
