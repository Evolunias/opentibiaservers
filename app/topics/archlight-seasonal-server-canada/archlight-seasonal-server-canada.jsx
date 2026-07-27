import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-seasonal-server-canada');
}

export default function ArchlightSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="archlight-seasonal-server-canada" />;
}
