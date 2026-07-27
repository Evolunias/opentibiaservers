import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-guide-south-america');
}

export default function PvpGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-guide-south-america" />;
}
