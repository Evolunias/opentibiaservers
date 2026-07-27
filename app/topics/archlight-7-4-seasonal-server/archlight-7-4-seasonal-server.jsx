import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-4-seasonal-server');
}

export default function Archlight74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-4-seasonal-server" />;
}
