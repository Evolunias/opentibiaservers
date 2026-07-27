import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-pvpe-server');
}

export default function Tibijka11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-pvpe-server" />;
}
