import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvpe-server-europe');
}

export default function NilotPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvpe-server-europe" />;
}
