import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-11-seasonal-server');
}

export default function Archlight11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-11-seasonal-server" />;
}
