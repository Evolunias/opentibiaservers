import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-seasonal-server-france');
}

export default function ArchlightSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-seasonal-server-france" />;
}
