import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-seasonal-server-argentina');
}

export default function ArchlightSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-seasonal-server-argentina" />;
}
