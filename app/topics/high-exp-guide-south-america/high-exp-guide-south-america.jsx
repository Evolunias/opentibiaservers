import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-guide-south-america');
}

export default function HighExpGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-guide-south-america" />;
}
