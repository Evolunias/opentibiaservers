import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-guide-uk');
}

export default function PvpeGuideUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-guide-uk" />;
}
