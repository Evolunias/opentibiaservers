import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-mexico');
}

export default function Tibia86ServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-mexico" />;
}
