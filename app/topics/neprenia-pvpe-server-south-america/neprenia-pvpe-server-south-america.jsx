import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvpe-server-south-america');
}

export default function NepreniaPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvpe-server-south-america" />;
}
