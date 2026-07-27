import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-seasonal-server-poland');
}

export default function TibiantisSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-seasonal-server-poland" />;
}
