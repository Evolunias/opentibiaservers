import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-seasonal-server-argentina');
}

export default function OxygenotSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-seasonal-server-argentina" />;
}
