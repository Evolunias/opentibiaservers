import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-servers-mexico');
}

export default function SeasonalServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-servers-mexico" />;
}
