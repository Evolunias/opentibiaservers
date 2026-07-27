import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvpe-server-south-america');
}

export default function TibiascapePvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvpe-server-south-america" />;
}
