import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-guide-south-america');
}

export default function EvoGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-guide-south-america" />;
}
