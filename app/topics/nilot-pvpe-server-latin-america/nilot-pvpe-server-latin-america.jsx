import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvpe-server-latin-america');
}

export default function NilotPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvpe-server-latin-america" />;
}
