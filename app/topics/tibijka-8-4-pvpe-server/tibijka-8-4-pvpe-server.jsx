import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-4-pvpe-server');
}

export default function Tibijka84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-4-pvpe-server" />;
}
