import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-4-pvpe-server');
}

export default function Medivia74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-4-pvpe-server" />;
}
