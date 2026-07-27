import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvpe-server-germany');
}

export default function LumineraPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvpe-server-germany" />;
}
