import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-guide-south-america');
}

export default function PvpEnforcedGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-guide-south-america" />;
}
