import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-seasonal-server-mexico');
}

export default function OxygenotSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-seasonal-server-mexico" />;
}
