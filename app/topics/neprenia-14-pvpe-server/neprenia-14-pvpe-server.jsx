import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-pvpe-server');
}

export default function Neprenia14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-pvpe-server" />;
}
