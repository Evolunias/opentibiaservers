import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-mexico');
}

export default function SeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-mexico" />;
}
