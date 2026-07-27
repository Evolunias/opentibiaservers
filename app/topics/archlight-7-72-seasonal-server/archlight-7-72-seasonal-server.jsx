import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-72-seasonal-server');
}

export default function Archlight772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-72-seasonal-server" />;
}
