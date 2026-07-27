import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-seasonal-server-usa');
}

export default function ArchlightSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-seasonal-server-usa" />;
}
