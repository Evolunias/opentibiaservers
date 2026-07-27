import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-guide-south-america');
}

export default function SeasonalGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-guide-south-america" />;
}
