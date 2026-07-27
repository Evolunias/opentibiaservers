import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvpe-server-usa');
}

export default function NepreniaPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvpe-server-usa" />;
}
