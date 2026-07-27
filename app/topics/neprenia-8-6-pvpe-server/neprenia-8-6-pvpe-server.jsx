import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-6-pvpe-server');
}

export default function Neprenia86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-6-pvpe-server" />;
}
