import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-72-pvpe-server');
}

export default function Medivia772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-72-pvpe-server" />;
}
