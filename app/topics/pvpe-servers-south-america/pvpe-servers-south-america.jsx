import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-servers-south-america');
}

export default function PvpeServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-servers-south-america" />;
}
