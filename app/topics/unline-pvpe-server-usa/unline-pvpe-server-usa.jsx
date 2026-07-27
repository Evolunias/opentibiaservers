import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvpe-server-usa');
}

export default function UnlinePvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvpe-server-usa" />;
}
