import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-seasonal-server-mexico');
}

export default function ArchlightSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-seasonal-server-mexico" />;
}
