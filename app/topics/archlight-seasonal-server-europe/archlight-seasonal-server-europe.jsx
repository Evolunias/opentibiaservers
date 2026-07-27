import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-seasonal-server-europe');
}

export default function ArchlightSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-seasonal-server-europe" />;
}
