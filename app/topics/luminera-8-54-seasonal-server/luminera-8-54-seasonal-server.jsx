import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-54-seasonal-server');
}

export default function Luminera854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-54-seasonal-server" />;
}
