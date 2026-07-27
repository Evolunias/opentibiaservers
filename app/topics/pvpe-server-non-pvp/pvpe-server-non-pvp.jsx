import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-non-pvp');
}

export default function PvpeServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-non-pvp" />;
}
