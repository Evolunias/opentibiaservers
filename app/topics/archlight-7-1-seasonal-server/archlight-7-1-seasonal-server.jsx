import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-1-seasonal-server');
}

export default function Archlight71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-1-seasonal-server" />;
}
