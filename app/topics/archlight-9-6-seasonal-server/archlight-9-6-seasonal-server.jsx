import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-9-6-seasonal-server');
}

export default function Archlight96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-9-6-seasonal-server" />;
}
