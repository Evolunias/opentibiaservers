import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-client-usa');
}

export default function PvpeClientUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-client-usa" />;
}
