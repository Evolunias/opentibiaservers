import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvpe-server-latin-america');
}

export default function LumineraPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvpe-server-latin-america" />;
}
