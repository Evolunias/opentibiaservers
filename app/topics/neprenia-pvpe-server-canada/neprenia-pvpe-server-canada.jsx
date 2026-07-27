import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvpe-server-canada');
}

export default function NepreniaPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvpe-server-canada" />;
}
