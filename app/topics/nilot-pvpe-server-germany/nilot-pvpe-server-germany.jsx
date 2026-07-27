import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvpe-server-germany');
}

export default function NilotPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvpe-server-germany" />;
}
