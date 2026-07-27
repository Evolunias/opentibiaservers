import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-seasonal-server-brazil');
}

export default function ArchlightSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-seasonal-server-brazil" />;
}
