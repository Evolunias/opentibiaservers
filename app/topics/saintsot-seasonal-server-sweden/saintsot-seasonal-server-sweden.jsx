import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-seasonal-server-sweden');
}

export default function SaintsotSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-seasonal-server-sweden" />;
}
