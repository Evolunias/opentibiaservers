import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-pvpe-server');
}

export default function Medivia100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-pvpe-server" />;
}
