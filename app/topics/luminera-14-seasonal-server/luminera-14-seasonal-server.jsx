import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-seasonal-server');
}

export default function Luminera14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-seasonal-server" />;
}
