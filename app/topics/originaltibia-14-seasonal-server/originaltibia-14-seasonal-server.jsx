import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-seasonal-server');
}

export default function Originaltibia14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-seasonal-server" />;
}
