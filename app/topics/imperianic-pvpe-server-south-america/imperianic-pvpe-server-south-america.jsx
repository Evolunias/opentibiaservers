import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvpe-server-south-america');
}

export default function ImperianicPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvpe-server-south-america" />;
}
