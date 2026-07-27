import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-guide-germany');
}

export default function NonPvpGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-guide-germany" />;
}
