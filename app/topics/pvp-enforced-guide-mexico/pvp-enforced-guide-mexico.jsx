import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-guide-mexico');
}

export default function PvpEnforcedGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-guide-mexico" />;
}
