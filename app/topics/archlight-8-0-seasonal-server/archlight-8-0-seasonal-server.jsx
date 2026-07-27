import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-0-seasonal-server');
}

export default function Archlight80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-0-seasonal-server" />;
}
