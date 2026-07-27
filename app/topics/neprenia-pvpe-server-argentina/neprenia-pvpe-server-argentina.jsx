import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvpe-server-argentina');
}

export default function NepreniaPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvpe-server-argentina" />;
}
