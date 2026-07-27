import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-6-pvpe-server');
}

export default function Neprenia76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-6-pvpe-server" />;
}
