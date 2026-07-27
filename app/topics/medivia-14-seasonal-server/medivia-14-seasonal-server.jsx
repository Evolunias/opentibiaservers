import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-seasonal-server');
}

export default function Medivia14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-seasonal-server" />;
}
