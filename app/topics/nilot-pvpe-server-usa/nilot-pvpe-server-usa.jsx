import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvpe-server-usa');
}

export default function NilotPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvpe-server-usa" />;
}
