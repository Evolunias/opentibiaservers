import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-seasonal-server-argentina');
}

export default function TibiantisSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-seasonal-server-argentina" />;
}
