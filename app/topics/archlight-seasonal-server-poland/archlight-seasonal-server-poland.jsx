import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-seasonal-server-poland');
}

export default function ArchlightSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-seasonal-server-poland" />;
}
