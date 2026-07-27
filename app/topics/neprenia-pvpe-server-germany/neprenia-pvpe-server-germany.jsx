import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvpe-server-germany');
}

export default function NepreniaPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvpe-server-germany" />;
}
