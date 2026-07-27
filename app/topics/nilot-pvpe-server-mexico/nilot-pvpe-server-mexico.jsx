import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvpe-server-mexico');
}

export default function NilotPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvpe-server-mexico" />;
}
