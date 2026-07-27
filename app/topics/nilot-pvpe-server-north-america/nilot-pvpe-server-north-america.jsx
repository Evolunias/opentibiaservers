import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvpe-server-north-america');
}

export default function NilotPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvpe-server-north-america" />;
}
