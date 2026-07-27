import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-54-seasonal-server');
}

export default function Archlight854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-54-seasonal-server" />;
}
