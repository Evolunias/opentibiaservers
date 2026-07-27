import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvpe-server-latin-america');
}

export default function OlderaPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvpe-server-latin-america" />;
}
