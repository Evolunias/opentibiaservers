import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvpe-server-france');
}

export default function NilotPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvpe-server-france" />;
}
