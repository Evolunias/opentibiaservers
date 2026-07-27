import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-guide-canada');
}

export default function PvpEnforcedGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-guide-canada" />;
}
