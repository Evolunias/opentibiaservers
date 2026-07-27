import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-non-pvp-servers');
}

export default function Tibia71NonPvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-non-pvp-servers" />;
}
