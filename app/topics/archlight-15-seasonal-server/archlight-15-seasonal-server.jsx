import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-seasonal-server');
}

export default function Archlight15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-seasonal-server" />;
}
