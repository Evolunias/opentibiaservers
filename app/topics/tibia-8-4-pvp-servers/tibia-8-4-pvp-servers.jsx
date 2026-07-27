import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvp-servers');
}

export default function Tibia84PvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvp-servers" />;
}
