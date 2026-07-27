import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-0-seasonal-server');
}

export default function Nostalther80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-0-seasonal-server" />;
}
