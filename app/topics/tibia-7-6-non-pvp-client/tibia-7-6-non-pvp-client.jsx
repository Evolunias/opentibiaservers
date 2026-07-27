import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-non-pvp-client');
}

export default function Tibia76NonPvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-non-pvp-client" />;
}
