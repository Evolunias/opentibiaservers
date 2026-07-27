import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-pvpe-server');
}

export default function Neprenia13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-pvpe-server" />;
}
