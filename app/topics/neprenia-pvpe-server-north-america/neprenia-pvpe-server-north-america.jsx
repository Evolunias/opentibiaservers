import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvpe-server-north-america');
}

export default function NepreniaPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvpe-server-north-america" />;
}
