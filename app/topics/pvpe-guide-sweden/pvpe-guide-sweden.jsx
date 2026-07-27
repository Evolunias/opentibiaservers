import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-guide-sweden');
}

export default function PvpeGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-guide-sweden" />;
}
