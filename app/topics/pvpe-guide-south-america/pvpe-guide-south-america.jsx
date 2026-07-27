import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-guide-south-america');
}

export default function PvpeGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-guide-south-america" />;
}
