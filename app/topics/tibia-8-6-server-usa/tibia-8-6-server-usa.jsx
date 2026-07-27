import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-usa');
}

export default function Tibia86ServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-usa" />;
}
