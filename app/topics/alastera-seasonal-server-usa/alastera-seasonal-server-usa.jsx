import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-seasonal-server-usa');
}

export default function AlasteraSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-seasonal-server-usa" />;
}
