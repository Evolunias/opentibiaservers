import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvpe-server-south-america');
}

export default function LumineraPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvpe-server-south-america" />;
}
