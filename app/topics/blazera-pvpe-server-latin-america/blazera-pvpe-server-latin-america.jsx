import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvpe-server-latin-america');
}

export default function BlazeraPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvpe-server-latin-america" />;
}
