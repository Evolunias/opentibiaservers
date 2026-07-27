import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-pvpe-server');
}

export default function Neprenia100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-pvpe-server" />;
}
