import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-guide-mexico');
}

export default function PvpeGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvpe-guide-mexico" />;
}
