import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-4-pvpe-server');
}

export default function Tibijka74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-4-pvpe-server" />;
}
