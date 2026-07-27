import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-guide-brazil');
}

export default function PvpEnforcedGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-guide-brazil" />;
}
