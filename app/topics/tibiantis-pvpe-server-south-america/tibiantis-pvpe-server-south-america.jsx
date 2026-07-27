import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvpe-server-south-america');
}

export default function TibiantisPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvpe-server-south-america" />;
}
