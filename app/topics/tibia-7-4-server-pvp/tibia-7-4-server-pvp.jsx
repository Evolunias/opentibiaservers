import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-pvp');
}

export default function Tibia74ServerPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-pvp" />;
}
