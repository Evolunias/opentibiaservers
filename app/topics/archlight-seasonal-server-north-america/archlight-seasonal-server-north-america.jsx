import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-seasonal-server-north-america');
}

export default function ArchlightSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-seasonal-server-north-america" />;
}
