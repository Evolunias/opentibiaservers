import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-1-seasonal-server');
}

export default function Archlight81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-1-seasonal-server" />;
}
