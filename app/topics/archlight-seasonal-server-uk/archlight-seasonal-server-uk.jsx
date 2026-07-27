import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-seasonal-server-uk');
}

export default function ArchlightSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-seasonal-server-uk" />;
}
