import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-canada');
}

export default function Tibia86ServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-canada" />;
}
