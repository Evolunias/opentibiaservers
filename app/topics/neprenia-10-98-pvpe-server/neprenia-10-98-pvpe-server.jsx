import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-98-pvpe-server');
}

export default function Neprenia1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-98-pvpe-server" />;
}
