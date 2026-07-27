import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvpe-server-poland');
}

export default function NilotPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvpe-server-poland" />;
}
