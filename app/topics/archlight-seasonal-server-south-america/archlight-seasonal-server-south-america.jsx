import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-seasonal-server-south-america');
}

export default function ArchlightSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-seasonal-server-south-america" />;
}
