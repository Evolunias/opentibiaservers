import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-guide-sweden');
}

export default function SeasonalGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="seasonal-guide-sweden" />;
}
