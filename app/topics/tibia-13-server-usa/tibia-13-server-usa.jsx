import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-usa');
}

export default function Tibia13ServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-usa" />;
}
