import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-pvpe-server');
}

export default function Medivia84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-pvpe-server" />;
}
