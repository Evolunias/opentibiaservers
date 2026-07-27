import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-guide-latin-america');
}

export default function PvpEnforcedGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-guide-latin-america" />;
}
