import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvpe-server-brazil');
}

export default function NepreniaPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvpe-server-brazil" />;
}
