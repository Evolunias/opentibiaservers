import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-seasonal-server-germany');
}

export default function RealestaSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-seasonal-server-germany" />;
}
