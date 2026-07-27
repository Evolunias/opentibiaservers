import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-guide-south-america');
}

export default function FreshStartGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-guide-south-america" />;
}
