import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-seasonal-server-germany');
}

export default function AlasteraSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-seasonal-server-germany" />;
}
