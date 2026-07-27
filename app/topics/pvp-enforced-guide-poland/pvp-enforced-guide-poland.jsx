import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-guide-poland');
}

export default function PvpEnforcedGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-guide-poland" />;
}
