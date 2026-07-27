import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-seasonal-server-germany');
}

export default function UnlineSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-seasonal-server-germany" />;
}
