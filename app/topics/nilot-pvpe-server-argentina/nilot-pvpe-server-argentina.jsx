import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvpe-server-argentina');
}

export default function NilotPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvpe-server-argentina" />;
}
