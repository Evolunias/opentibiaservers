import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-south-america');
}

export default function Tibia74ServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-south-america" />;
}
