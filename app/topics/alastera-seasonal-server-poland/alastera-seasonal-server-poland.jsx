import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-seasonal-server-poland');
}

export default function AlasteraSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-seasonal-server-poland" />;
}
