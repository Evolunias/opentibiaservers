import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-seasonal-server-germany');
}

export default function TibiantisSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-seasonal-server-germany" />;
}
