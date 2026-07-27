import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-servers-usa');
}

export default function PvpeServersUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-servers-usa" />;
}
