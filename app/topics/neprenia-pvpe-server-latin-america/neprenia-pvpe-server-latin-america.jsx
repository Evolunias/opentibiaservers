import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvpe-server-latin-america');
}

export default function NepreniaPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvpe-server-latin-america" />;
}
