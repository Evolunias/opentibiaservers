import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-6-pvpe-server');
}

export default function Medivia86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-6-pvpe-server" />;
}
