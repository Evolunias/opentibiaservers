import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-seasonal-server-germany');
}

export default function LumineraSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-seasonal-server-germany" />;
}
