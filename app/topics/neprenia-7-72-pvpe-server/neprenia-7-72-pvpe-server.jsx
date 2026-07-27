import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-72-pvpe-server');
}

export default function Neprenia772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-72-pvpe-server" />;
}
