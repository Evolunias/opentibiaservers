import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvpe-server-argentina');
}

export default function LumineraPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvpe-server-argentina" />;
}
