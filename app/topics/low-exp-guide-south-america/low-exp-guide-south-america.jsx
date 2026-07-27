import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-guide-south-america');
}

export default function LowExpGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-guide-south-america" />;
}
