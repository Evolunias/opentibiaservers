import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-13-seasonal-server');
}

export default function Archlight13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-13-seasonal-server" />;
}
