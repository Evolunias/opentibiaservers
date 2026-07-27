import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvpe-server-mexico');
}

export default function NepreniaPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvpe-server-mexico" />;
}
