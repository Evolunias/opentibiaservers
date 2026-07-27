import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-guide-germany');
}

export default function PvpGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-guide-germany" />;
}
