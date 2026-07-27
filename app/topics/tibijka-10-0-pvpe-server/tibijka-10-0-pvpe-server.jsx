import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-pvpe-server');
}

export default function Tibijka100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-pvpe-server" />;
}
