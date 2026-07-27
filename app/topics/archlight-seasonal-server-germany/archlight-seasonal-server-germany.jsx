import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-seasonal-server-germany');
}

export default function ArchlightSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-seasonal-server-germany" />;
}
