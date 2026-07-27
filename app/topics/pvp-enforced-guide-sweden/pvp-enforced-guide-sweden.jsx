import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-guide-sweden');
}

export default function PvpEnforcedGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-guide-sweden" />;
}
