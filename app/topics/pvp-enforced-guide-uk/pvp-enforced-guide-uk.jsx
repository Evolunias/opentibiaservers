import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-guide-uk');
}

export default function PvpEnforcedGuideUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-guide-uk" />;
}
