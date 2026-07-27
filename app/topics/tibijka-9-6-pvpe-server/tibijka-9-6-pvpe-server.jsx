import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-9-6-pvpe-server');
}

export default function Tibijka96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-9-6-pvpe-server" />;
}
