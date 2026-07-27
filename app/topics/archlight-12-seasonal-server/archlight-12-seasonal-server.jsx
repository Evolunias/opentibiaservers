import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-seasonal-server');
}

export default function Archlight12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-seasonal-server" />;
}
