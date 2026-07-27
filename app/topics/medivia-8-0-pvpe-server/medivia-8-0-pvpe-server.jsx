import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-0-pvpe-server');
}

export default function Medivia80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-0-pvpe-server" />;
}
