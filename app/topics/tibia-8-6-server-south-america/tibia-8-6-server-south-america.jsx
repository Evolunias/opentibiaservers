import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-south-america');
}

export default function Tibia86ServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-south-america" />;
}
