import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-seasonal-server');
}

export default function Neprenia14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-seasonal-server" />;
}
