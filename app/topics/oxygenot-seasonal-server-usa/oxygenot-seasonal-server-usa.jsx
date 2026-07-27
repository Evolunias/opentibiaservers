import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-seasonal-server-usa');
}

export default function OxygenotSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-seasonal-server-usa" />;
}
