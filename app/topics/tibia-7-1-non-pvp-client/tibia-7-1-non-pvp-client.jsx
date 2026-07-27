import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-non-pvp-client');
}

export default function Tibia71NonPvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-non-pvp-client" />;
}
