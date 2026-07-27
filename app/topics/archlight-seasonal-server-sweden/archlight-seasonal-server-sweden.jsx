import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-seasonal-server-sweden');
}

export default function ArchlightSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-seasonal-server-sweden" />;
}
