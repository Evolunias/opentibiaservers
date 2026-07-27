import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-non-pvp');
}

export default function Tibia74ServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-non-pvp" />;
}
