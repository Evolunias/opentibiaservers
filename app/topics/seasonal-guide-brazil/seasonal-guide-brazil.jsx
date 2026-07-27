import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-guide-brazil');
}

export default function SeasonalGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-guide-brazil" />;
}
