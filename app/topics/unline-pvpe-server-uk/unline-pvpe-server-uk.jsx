import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvpe-server-uk');
}

export default function UnlinePvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="unline-pvpe-server-uk" />;
}
