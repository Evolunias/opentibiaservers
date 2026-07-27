import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-pvpe-server');
}

export default function Neprenia12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-pvpe-server" />;
}
