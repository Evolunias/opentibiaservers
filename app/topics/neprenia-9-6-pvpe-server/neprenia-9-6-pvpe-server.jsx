import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-pvpe-server');
}

export default function Neprenia96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-pvpe-server" />;
}
