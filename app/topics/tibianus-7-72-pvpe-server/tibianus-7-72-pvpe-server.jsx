import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-72-pvpe-server');
}

export default function Tibianus772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-72-pvpe-server" />;
}
