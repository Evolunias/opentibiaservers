import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-14-seasonal-server');
}

export default function Miracle14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-14-seasonal-server" />;
}
