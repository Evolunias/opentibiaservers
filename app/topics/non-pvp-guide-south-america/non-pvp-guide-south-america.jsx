import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-guide-south-america');
}

export default function NonPvpGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-guide-south-america" />;
}
