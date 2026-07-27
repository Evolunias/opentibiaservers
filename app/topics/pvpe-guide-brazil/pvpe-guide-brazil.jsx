import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-guide-brazil');
}

export default function PvpeGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-guide-brazil" />;
}
