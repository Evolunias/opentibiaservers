import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvpe-server-europe');
}

export default function UnlinePvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-pvpe-server-europe" />;
}
