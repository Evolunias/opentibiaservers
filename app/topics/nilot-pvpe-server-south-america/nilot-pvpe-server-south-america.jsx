import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvpe-server-south-america');
}

export default function NilotPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvpe-server-south-america" />;
}
