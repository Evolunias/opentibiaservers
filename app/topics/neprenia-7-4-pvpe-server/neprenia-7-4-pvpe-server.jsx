import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-pvpe-server');
}

export default function Neprenia74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-pvpe-server" />;
}
