import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-guide-germany');
}

export default function PvpEnforcedGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-guide-germany" />;
}
