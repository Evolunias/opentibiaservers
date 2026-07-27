import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvpe-server-usa');
}

export default function LumineraPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvpe-server-usa" />;
}
