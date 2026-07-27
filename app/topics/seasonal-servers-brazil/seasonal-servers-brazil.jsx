import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-servers-brazil');
}

export default function SeasonalServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-servers-brazil" />;
}
