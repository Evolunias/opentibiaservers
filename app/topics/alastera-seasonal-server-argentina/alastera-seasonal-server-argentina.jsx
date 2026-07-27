import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-seasonal-server-argentina');
}

export default function AlasteraSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-seasonal-server-argentina" />;
}
