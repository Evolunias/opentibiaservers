import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvpe-server-uk');
}

export default function NilotPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvpe-server-uk" />;
}
