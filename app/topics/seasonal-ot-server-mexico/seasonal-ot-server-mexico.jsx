import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ot-server-mexico');
}

export default function SeasonalOtServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ot-server-mexico" />;
}
