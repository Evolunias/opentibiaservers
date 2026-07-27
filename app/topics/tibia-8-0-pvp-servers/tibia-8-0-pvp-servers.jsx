import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvp-servers');
}

export default function Tibia80PvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvp-servers" />;
}
