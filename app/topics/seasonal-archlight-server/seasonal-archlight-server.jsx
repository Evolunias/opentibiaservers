import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-archlight-server');
}

export default function SeasonalArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-archlight-server" />;
}
