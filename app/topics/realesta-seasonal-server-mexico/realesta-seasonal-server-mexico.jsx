import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-seasonal-server-mexico');
}

export default function RealestaSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-seasonal-server-mexico" />;
}
